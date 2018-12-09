require "application_system_test_case"

class FavesTest < ApplicationSystemTestCase
  setup do
    @fafe = faves(:one)
  end

  test "visiting the index" do
    visit faves_url
    assert_selector "h1", text: "Faves"
  end

  test "creating a Fave" do
    visit faves_url
    click_on "New Fave"

    fill_in "Ucolor", with: @fafe.UColor
    fill_in "Uline", with: @fafe.ULine
    fill_in "Userid", with: @fafe.UserID
    click_on "Create Fave"

    assert_text "Fave was successfully created"
    click_on "Back"
  end

  test "updating a Fave" do
    visit faves_url
    click_on "Edit", match: :first

    fill_in "Ucolor", with: @fafe.UColor
    fill_in "Uline", with: @fafe.ULine
    fill_in "Userid", with: @fafe.UserID
    click_on "Update Fave"

    assert_text "Fave was successfully updated"
    click_on "Back"
  end

  test "destroying a Fave" do
    visit faves_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Fave was successfully destroyed"
  end
end
