# cli

## index.md

# CLI Reference - Ruby

## Ruby Interpreter

```bash
# Run script
ruby script.rb script.rb arg1 arg2

# Interactive mode
irb

# One-liner
ruby -e 'puts "Hello"'

# Check syntax
ruby -c script.rb

# Version
ruby --version
```

## RubyGems

```bash
# Search gems
gem search keyword

# Install gem
gem install gem_name
gem install gem_name --version 1.0.0

# List installed
gem list

# Update gem
gem update gem_name

# Uninstall
gem uninstall gem_name
```

## Bundler

```bash
# Initialize
bundle init

# Create Gemfile from installed gems
bundle gem newgem

# Install dependencies
bundle install
bundle install --jobs=4

# Update
bundle update
bundle update gem_name

# Execute with bundler
bundle exec rails server
bundle exec ruby script.rb
```

## rake

```bash
# List tasks
rake -T

# Run task
rake task_name

# Specify environment
RAILS_ENV=production rake db:migrate
```

## Rails CLI

```bash
# Create app
rails new myapp
cd myapp

# Server
rails server
rails s -p 3001

# Generate
rails generate controller Users
rails generate model User name:string

# Database
rails db:migrate
rails db:rollback
rails db:seed

# Console
rails console
rails c
```

## Common Commands

| Command | Description |
|---------|-------------|
| `ruby -v` | Version |
| `ruby -c file` | Check syntax |
| `ruby -w file` | Run with warnings |
| `irb` | Interactive Ruby |
| `gem list` | List gems |
| `bundle install` | Install deps |
| `bundle exec cmd` | Run with deps |
| `rubocop` | Linter |
| `rake -T` | List tasks |


---

