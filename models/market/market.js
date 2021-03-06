const bookshelf = require('../../config/bookshelf');

const Market = bookshelf.Model.extend({
    tableName: 'Market'
});

module.exports.createMarket = (market) => {
    createDate = new Date(Date.now()).toLocaleString();

    return new Market({
        marketId: null,
        name: market.name,
        support: market.support,
        logo: market.logo,
        link: market.link,
        description: market.description,
        raiting: market.raiting,
        adress: market.adress,
        createdDate: createDate,
    }).save(null, { method: "insert" })
        .catch((err) => { console.log(err); return err });
};

module.exports.updateMarket = (market) => {
    updateDate = new Date(Date.now()).toLocaleString();

    return new Market({
        name: market.name,
        support: market.support,
        logo: market.logo,
        link: market.link,
        description: market.description,
        raiting: market.rating,
        adress: market.adress,
        updatedDate: updateDate
    }).where('marketId', market.marketId)
        .save(null, { method: "update" }, { patch: true })
        .catch((err) => { console.log(err); return err });
};

module.exports.updateTrustpilotMarket = (trustpilot) => {
    updateDate = new Date(Date.now()).toLocaleString();
    return new Market({
        TPraiting: trustpilot.ratingValue,
        TPreviewCount: trustpilot.reviewCount,
        updatedDate: updateDate
    }).where('marketId', trustpilot.marketId)
        .save(null, { method: "update" }, { patch: true })
        .catch((err) => { console.log(err); return err });
};
