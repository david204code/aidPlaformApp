if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_aidplaformapp", 
  domain: "myheroku.com"
else
  Rails.application.config.session_store :cookie_store, key: "_aidplaformapp"
end