const React = require('react');
const {mount} = require('enzyme');
const {Game} = require('../src/client/Game');


// i didnt do the tests part for odev05
//lose condition
test("lose", () => {
    const driver = mount(<Game/>);
    //mount
    let card = driver.find('.kart').at(0);
    //getting css elements card at 0
    card.simulate('click');
    card.find("img").prop("src");
    //simulate the click and expect its source to be a dog picture
    card = driver.find('.kart').at(0);
    let srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kopek.jpg');
});
// win condition
test("win", () => {
    const driver = mount(<Game/>);

    let card = driver.find('.kart').at(0);

    card.simulate('click');
    card.find("img").prop("src");
    //simulate the click and expect its source to be a cat picture
    card = driver.find('.kart').at(0);
    let srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kedi.jpg');
});
//card click
test("cardClick", () => {
    const driver = mount(<Game/>);

    let card = driver.find('.kart').at(0);

    card.simulate('click');
    card.find("img").prop("src");

    card = driver.find('.kart').at(1);
    card.simulate('click');

    card = driver.find('.kart').at(2);
    card.simulate('click');
    //src can be either dog picture or cat picture
    // toBeTruthy means if either is true make the whole statement true
    card = driver.find('.kart').at(0);
    let srcName = card.find("img").prop("src");
    expect(srcName === 'img/Kopek.jpg' || srcName ==='img/Kedi.jpg').toBeTruthy();
});
//new game - restart game
test("newGame", () => {
    const driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(1);
    card.simulate('click');
    //we fail or win then click the restart
    let yenidenBaslat = driver.find('.link');
    yenidenBaslat.simulate('click');
});
//multiple games
test("multiple", () => {
   let driver = mount(<Game/>);


   for(let i = 0; i<50; i++){
       let card =driver.find('.kart').at(0);
       card.simulate('click');
       card = driver.find('.kart').at(1);
       card.simulate('click');
       //click first 2 cards
       card = driver.find('.kart').at(0);
       let srcName = card.find("img").prop("src");
       expect(srcName === 'img/Kopek.jpg' || srcName ==='img/Kedi.jpg').toBeTruthy();
       //we win or lose
       let yenidenBaslat = driver.find('.link');
       yenidenBaslat.simulate('click');
       //we restart
       driver = mount(<Game/>);
   }
});
