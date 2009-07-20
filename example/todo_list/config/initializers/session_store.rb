# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_todo_list_session',
  :secret      => '2d992bc3241594a363bd1d8ae693ff8571564d695c719e0e5faf00d3f3a207b85f881fadfa3d2a5ae2b0bf8f52125145dfaaca1b2a8633fbc81fdf975d753253'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
