When(/^I visit the welcome page$/) do
  visit "/"
end

Then(/^I see the network status$/) do
  expect(page.body).to have_content "Network Status: On"
end