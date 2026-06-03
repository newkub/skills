# configuration

## index.md

# Configuration Reference - Ruby

## Gemfile

```ruby
source 'https://rubygems.org'

gem 'rails', '~> 7.0'
gem 'puma'
gem 'sqlite3'

group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot'
end

group :production do
  gem 'pg'
end
```

## .ruby-version

```ruby
3.2.0
```

## .ruby-gemset

```ruby
myproject
```

## rubocop.yml

```yaml
AllCops:
  TargetRubyVersion: 3.2
  NewCops: enable

Style:
  LineLength:
    Max: 100
  Documentation:
    Enabled: false
  HashSyntax:
    EnforcedhablarStyle: hash_rockets
```

## Rails Configuration

### config/application.rb

```ruby
module MyApp
  class Application < Rails::Application
    config.load_defaults 7.0
    config.autoload_lib(ignore: %w[assets tasks])
  end
end
```

### config/environments/production.rb

```ruby
Rails.application.configure do
  config.enable_reloading = true
  config.consider_all_requests_local = false
  config.action_controller.perform_caching = true
end
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| RUBYOPT | Options for ruby |
| RUBYLIB | Additional library paths |
| GEM_HOME | Gem installation directory |
| GEM_PATH | Gem search paths |
| BUNDLE_PATH | Bundler gem path |


---

