# BlytzPay E2E Testing Demo with Cypress 🚀
Welcome! This repo demonstrates how to set up end-to-end testing for BlytzPay using Cypress and JavaScript, complete with a CI pipeline powered by GitHub Actions. The goal is to showcase my practical testing and automation skills.

## 🛠️ Tech Stack
- Cypress
- Yarn
## 🚀 Getting Started
Clone the repo:
```bash
git clone https://github.com/yourusername/blytzpay-e2e-demo.git
cd blytzpay-e2e-demo
```
Install dependencies:
```bash
yarn install
```
Run the tests
for interactive mode:
```bash
yarn cypress open
```
For headless mode (CI-friendly):
```bash
yarn cypress run
```
## 🤖 Continuous Integration (CI)
Every push or pull request to the main branch triggers the CI pipeline, automatically running the Cypress tests in a cloud-based Ubuntu environment via GitHub Actions.

### 📋 CI Workflow Overview:
```yaml
name: End-to-end tests
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Cypress run
        uses: cypress-io/github-action@v6
```
🎯 This project is designed to showcase my Cypress testing skills and how to create automated workflows for BlytzPay.

