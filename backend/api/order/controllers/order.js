"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const stripe = require("stripe")("sk_test_PeZSdXm81qwBfkul1mHp8L5P");

module.exports = {
  /**
   * Create a/an order record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const { address, amount, dishes, token } = JSON.parse(ctx.request.body);
    const stripeAmount = Math.floor(amount * 100); //5.95 ⇨ 5
    // charge on stripe
    const charge = await stripe.charges.create({
      amount: stripeAmount,
      currency: "usd",
      description: `Order ${new Date()}`,
      source: token,
    });

    //データベースに注文を登録する
    const order = await strapi.services.order.create({
      user: ctx.state.user.id,
      charge_id: charge.id,
      amount: stripeAmount,
      address,
      dishes,
    });

    return order;
  },
};
