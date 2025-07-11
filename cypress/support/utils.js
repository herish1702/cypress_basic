const getElement = (selector) => {
  return selector.startsWith("//") || selector.startsWith("(")
    ? cy.xpath(selector)
    : cy.get(selector)
}

const clickElement = (locator) => {
  getElement(locator).click()
}

const typeText = (locator, text) => {
  getElement(locator).type(text)
}

const dragAndDropElement = (source, target) => {
    getElement(source).drag(getElement(target), { force: true })
}

export { clickElement, typeText, dragAndDropElement }