describe("structure", function () {

    let textDocument;
    let htmlDocument;
    const expect = chai.expect;

    before(async function() {
        textDocument = await loadTextFile('../index.html');
        htmlDocument = convertToHtml(textDocument);
    });

    it('should contain correct doctype', function () {
        const doctype = htmlDocument.doctype;
        expect(doctype).to.not.be.null;

        expect(textDocument).to.include('<!DOCTYPE html>');
    });

    it('should contain root element html', function () {
        const element = htmlDocument.querySelector('html');
        expect(element.getAttribute('lang')).to.eql('de');
    });

    it('should contain lang attribute with correct value in html element', function () {
        const element = htmlDocument.querySelector('html');
        expect(element.attr).not.to.be.null;

        expect(textDocument).to.include('<html');
    });

    it('should contain head element at correct position', function () {
        const element = htmlDocument.querySelector('html > head');
        expect(element).not.to.be.null;

        expect(textDocument).to.include('<head');
    });

    it('should contain body element at correct position', function () {
        const element = htmlDocument.querySelector('html > body');
        expect(element).not.to.be.null;

        expect(textDocument).to.include('<body');
    });

});

describe("metadata", function () {

    let textDocument;
    let htmlDocument;
    const expect = chai.expect;

    before(async function() {
        textDocument = await loadTextFile('../index.html');
        htmlDocument = convertToHtml(textDocument);
    });

    it('should contain title at correct document position', function () {
        const title = htmlDocument.querySelector('html > head > title');
        expect(title).to.not.be.null;
    });

    it('should contain title with correct text', function () {
        const title = htmlDocument.querySelector('title');
        expect(title.textContent).to.eql('Basics');
    });

    it('should contain author at correct document position', function () {
        const title = htmlDocument.querySelector('html > head > meta[name="author"]');
        expect(title).to.not.be.null;
    });

});

describe("content", function () {

    let textDocument;
    let htmlDocument;
    const expect = chai.expect;

    before(async function() {
        textDocument = await loadTextFile('../index.html');
        htmlDocument = convertToHtml(textDocument);
    });

    it('should contain main headline with correct text', function () {
        const headlineList = htmlDocument.querySelectorAll('h1');
        expect(headlineList.length).to.eql(1);
        expect(headlineList[0].textContent).to.eql('Grundlagen der Web-Programmierung');
    });

    it('should contain fist sub-headline with correct text', function () {
        const subHeadline = htmlDocument.querySelector('h1 ~ h2:nth-of-type(1)');
        expect(subHeadline).not.to.be.null;
        expect(subHeadline.textContent).to.eql('Inhalte');
    });

    it('should contain paragraph with correct text', function () {
        const paragraph = htmlDocument.querySelector('p');
        expect(paragraph.textContent.replace(/\s+/g, ' ').trim()).to.eql('Im Bereich der Grundlagen werden verschiedene Themengebiete beleuchtet, die f\u00FCr das Verst\u00E4ndnis der Web-Programmierung unbedingt erforderlich sind.');
    });

    it('should contain ordered list with correct items', function () {
        const orderedList = htmlDocument.querySelector('body > ol');
        expect(orderedList).to.not.be.null;

        const listItemsHtml = orderedList.querySelectorAll('li');
        expect(listItemsHtml.length).to.eql(3);

        const listItemsText = Array.from(listItemsHtml).map(li => li.textContent);
        expect(listItemsText).to.deep.equal(['HTML', 'CSS', 'Javascript']);
    });

    it('should contain second sub-headline with correct text', function () {
        const subHeadline = htmlDocument.querySelector('h1 ~ h2:nth-of-type(2)');
        expect(subHeadline).not.to.be.null;
        expect(subHeadline.textContent).to.eql('Versionen');
    });

    it('should contain table with correct content', function () {
        const table = htmlDocument.querySelector('h1 ~ h2:nth-of-type(2) ~ table');
        expect(table).not.to.be.null;

        const headerTexts = Array.from(table.querySelectorAll('tr:nth-of-type(1) > th')).map(th => th.textContent);
        expect(headerTexts).to.deep.equal(['Version', 'Datum', 'Autor']);

        const firstRowTexts = Array.from(table.querySelectorAll('tr:nth-of-type(2) > td')).map(td => td.textContent);
        expect(firstRowTexts).to.deep.equal(['v1', '13.09.2024', 'Andreas Rehmann']);
    });

    it('should contain third sub-headline with correct text', function () {
        const subHeadline = htmlDocument.querySelector('h1 ~ h2:nth-of-type(3)');
        expect(subHeadline).not.to.be.null;
        expect(subHeadline.textContent).to.eql('Hochschule');
    });

    it('should contain image with link to website', function () {
        const link = htmlDocument.querySelector('h1 ~ h2:nth-of-type(3) ~ a:nth-of-type(1)');
        expect(link).not.to.be.null;
        expect(link.getAttribute('href')).to.eql('https://www.dhbw-vs.de');
        expect(link.getAttribute('target')).to.eql('_blank');

        const image = link.querySelector('img');
        expect(image).not.to.be.null;
        expect(image.getAttribute('src')).to.eql('https://www.dhbw-vs.de/files/img/logo_mobile.png');
        expect(image.getAttribute('alt')).to.eql('DHBW Logo');
    });
});

async function loadTextFile(filePath) {
    const content = await fetch(filePath);
    return await content.text();
}

function convertToHtml(text) {
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/html');
}