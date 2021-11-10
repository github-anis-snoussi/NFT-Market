const { ethers } = require("hardhat");

/* to execute tests: npx hardhat test */

describe("NFTMarket", function () {
  it("Should create and execute market sales", async function () {
    /* deploy the marketplace */
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    /* deploy the NFT contract */
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftContractAddress = nft.address;

    /* get the listing price */
    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    /* how much we are selling our times for */
    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    /* create two tokens */
    await nft.createToken("https://www.mytokenlocation1.com");
    await nft.createToken("https://www.mytokenlocation2.com");

    /* put both tokens for sale */
    await market.createMarketItem(nftContractAddress, 1, auctionPrice, {
      value: listingPrice,
    });
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, {
      value: listingPrice,
    });

    /* 
      get test accounts 
      we can destructure as many address from the function as we want [_, address2, address3, address4]
      we are ignoring the first address (_) because it's the one used to deploy during the test
    */
    const [_, buyerAddress] = await ethers.getSigners();

    /* execute sale of token to another user */
    await market
      .connect(buyerAddress)
      .createMarketSale(nftContractAddress, 1, { value: auctionPrice });

    /* query for and return the unsold items */
    items = await market.fetchMarketItems();
    // we are making the items more human readable
    items = await Promise.all(
      items.map(async (i) => {
        const tokenUri = await nft.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri,
        };
        return item;
      })
    );
    console.log("items: ", items);
  });
});
