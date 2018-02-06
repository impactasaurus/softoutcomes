const fs = require('fs');

describe('data', () => {
    const questionnaireFiles = fs.readdirSync('./public/data/questionnaire');

    describe('catalogue', () => {
        it('should be a valid catalogue definition', () => {
            const catalogue = require('./public/data/catalogue');
            expect(catalogue).toBeType('array');
            catalogue.forEach(({
                id,
                key,
                logo,
                name,
                description,
                length,
                sectors,
                demographic,
            }) => {
                expect(id).toBeGreaterThanOrEqual(1);
                expect(key).toBeNonEmptyString();
                expect(logo).toMatch(/\.(jpg|jpeg|png|gif)$/);
                expect(name).toBeNonEmptyString();
                expect(description).toBeNonEmptyString();
                expect(length).toBeGreaterThanOrEqual(1);
                
                expect(sectors).toBeType('array');
                sectors.forEach(s => {
                    expect(s).toBeNonEmptyString();
                });

                expect(demographic).toBeType('array');
                demographic.forEach(d => {
                    expect(d).toBeNonEmptyString();
                });
            });

            // Verify that each element in the catalogue has a matching definition.
            // We do this later to flush out any other issues in the catalogue first.
            catalogue.forEach(({
                key,
            }) => {
                expect(questionnaireFiles).toContain(`${key}.json`);                
            });
        });
    });

    describe('questionnaires', () => {
        questionnaireFiles.forEach(questionnaireFile => {
            const {
                id,
                key,
                logo,
                name,
                description,
                pdfLink,
                sectors,
                demographic,
                questions,
                scoring,
            } = questionnaire = require(`./public/data/questionnaire/${questionnaireFile}`);
            it(`${questionnaireFile} should be a valid questionnaire`, () => {
                expect(id).toBeGreaterThanOrEqual(1);
                expect(key).toBeNonEmptyString();
                expect(questionnaireFile).toEqual(`${key}.json`);
                expect(logo).toMatch(/\.(jpg|jpeg|png|gif)$/);
                expect(name).toBeNonEmptyString();
                expect(description).toBeNonEmptyString()
                expect(pdfLink).toBeNonEmptyString();

                expect(sectors).toBeType('array');
                sectors.forEach(s => {
                    expect(s).toBeNonEmptyString();
                });

                expect(demographic).toBeType('array');
                demographic.forEach(d => {
                    expect(d).toBeNonEmptyString();
                });

                expect(questions).toBeType('array');
                expect(questions).not.toHaveLength(0);
                questions.forEach(({
                    id: questionId,
                    text,
                    left,
                    right,
                    categories,
                }) => {
                    expect(questionId).toBeGreaterThanOrEqual(1);
                    expect(text).toBeNonEmptyString();
                    
                    [left, right].forEach(label => {
                        expect(label).toBeType('object');
                        expect(label).not.toBeNull();
                        expect(label.score).toBeGreaterThanOrEqual(1);
                        expect(label.label).toBeNonEmptyString();        
                    });
                    
                    expect(categories).toBeType('array');
                    categories.forEach(c => {
                        expect(c).toBeNonEmptyString();
                    });
                });

                expect(scoring).toBeType('object');
                expect(scoring.aggregation).toMatch(/^(total|sum)/i);
                expect(scoring.bands).toBeType('array');
                expect(scoring.bands).not.toHaveLength(0);
                scoring.bands.forEach(band => {
                    expect(band).toBeType('object');
                    expect(band.minimum).toBeGreaterThanOrEqual(0);
                    expect(band.maximum).toBeGreaterThan(0);
                    expect(band.label).toBeNonEmptyString();
                });
            });
        });
    });
});