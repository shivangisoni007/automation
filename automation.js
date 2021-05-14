const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport : false
    })
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 768});
    await page.setDefaultNavigationTimeout(0);
    await page.goto('http://automationpractice.com/index.php');
    
    // await page.waitFor(50000);

    await page.waitForSelector('#header > div.nav > div > div > nav > div.header_user_info > a',{visible: true});
    await page.click('#header > div.nav > div > div > nav > div.header_user_info > a');

    

    // await page.waitForSelector('#email_create',{visible: true});
    // await page.type('#email_create','5zn9tr0wtz@gmail.com');
    // await page.click('#SubmitCreate');

    // to create new account
    // await page.waitForSelector('#id_gender2',{visible: true});
    // await page.click('#id_gender2');
    // await page.type('#customer_firstname','Anshika');
    // await page.type('#customer_lastname', 'Goinka');
    // await page.type('#passwd','123456');
    // await page.waitForSelector('.col-xs-4 > #uniform-days > #days',{visible: true});
    // await page.click('.col-xs-4 > #uniform-days > #days');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('5');
    // await page.keyboard.press('Enter');
    // await page.waitForSelector('.col-xs-4 > #uniform-months > #months ',{visible: true});
    // await page.click('.col-xs-4 > #uniform-months > #months ');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    // await page.waitForSelector('#uniform-years > #years',{visible: true});
    // await page.click('#uniform-years > #years');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    // await page.waitForSelector('#newsletter');
    // await page.click('#newsletter');
    // await page.waitForSelector('#uniform-optin');
    // await page.click('#uniform-optin');
    // await page.type('#address1', 'xyz colony, b wing, 102 flat');
    // await page.type('#city' ,'mumbai');
    // await page.waitForSelector('#id_state',{visible: true});
    // await page.click('#id_state');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    // await page.type('#postcode', '29400');
    // await page.waitForSelector('#id_country');
    // await page.click('#id_country');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    // await page.type('#phone','945876215');
    // await page.type('#phone_mobile', '7854693210');
    // await page.type('#alias','may be sometime later');
    // await page.waitForSelector('#submitAccount');
    // await page.click('#submitAccount');

    await page.waitForSelector('#email',{visible: true});
    await page.type('#email', '3zn9tr0wtz@gmail.com');
    await page.waitForSelector('#passwd',{visible: true});
    await page.type('#passwd', '123456');

    await page.waitForSelector('#SubmitLogin',{visible: true});
    await page.click('#SubmitLogin');

    await page.waitForSelector('#block_top_menu > ul > li:nth-child(1) > a',{visible: true});
    await page.click('#block_top_menu > ul > li:nth-child(1) > a');

    await page.waitForSelector('#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img',{visible: true});
    await page.click('#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img');

    await page.waitForSelector('#add_to_cart > button',{visible: true});
    await page.setDefaultNavigationTimeout(0);
    await page.click('#add_to_cart > button');

    await page.waitForSelector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a',{visible: true});
    await page.setDefaultNavigationTimeout(0);
    await page.click('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a');

    await page.waitForSelector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium',{visible: true});
    await page.setDefaultNavigationTimeout(0);
    await page.click('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium');

    await page.waitForSelector('#ordermsg > textarea',{visible: true});
    await page.type('#ordermsg > textarea', 'THIS IS A AUTOMATED BOT PERFORMANCE');

    await page.waitForSelector('#center_column > form > p > button',{visible: true});
    await page.click('#center_column > form > p > button');

    await page.waitForSelector('#cgv',{visible: true});
    await page.click('#cgv');

    await page.waitForSelector('#form > p > button',{visible: true});
    await page.setDefaultNavigationTimeout(0);
    await page.click('#form > p > button');

    await page.waitForSelector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a',{visible: true});
    await page.click('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');

    await page.waitForSelector('#cart_navigation > button', {visible: true});
    await page.click('#cart_navigation > button');

    await page.waitForSelector('#center_column > p > a',{visible: true});
    await page.click('#center_column > p > a');

    await page.waitForSelector('#center_column >ul > li:nth-child(2) > a ', {visible: true});
    await page.click('#center_column > ul > li:nth-child(2) > a');






})();
