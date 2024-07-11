/* eslint-disable no-undef */
Feature('Liking and Unliking Restaurants');

Scenario('liking a restaurants', ({ I }) => {
  I.amOnPage('/#/kage-favorite');
  I.dontSeeElement('.kage-card');
  I.click(locate('li.menu-list').find('a').withText('Home'));
  I.click('.kage-title');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click(locate('li.menu-list').find('a').withText('Favorite'));
  I.seeElement('.kage-card');
});

Scenario('unliking a restaurants', ({ I }) => {
  I.amOnPage('/#/kage-home');
  I.click('.kage-title');
  I.click('#likeButton');
  I.click(locate('li.menu-list').find('a').withText('Favorite'));
  I.seeElement('.kage-card');
  I.click('.kage-title');
  I.click('#likeButton');
  I.click(locate('li.menu-list').find('a').withText('Favorite'));
  I.dontSee('.kage-card');
});
