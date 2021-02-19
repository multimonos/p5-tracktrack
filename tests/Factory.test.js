import Factory from "../src/lib/Factory";

describe( `Factory`, () => {

    describe( `.create( Model.Schema )( defaults || {} )`, () => {

        it( `creates an empty object with no properties`, () => {
            const a = Factory.create( {} )( {} )
            expect( a ).toEqual( {} )
        } )

        it( `is curried`, () => {
            const a = Factory.create( {}, {} )
            expect( a ).toEqual( {} )
        } )

        it.each( [
            [undefined],
            [null],
            [1],
            ['xxx'],
            [[]],
            [[[]]],
            // [{}], // should not throw
        ] )( `throws an error if 2nd argument is '%s'`, ( val ) => {
            expect( () => {
                const s = Factory.create( {} )( val )
            } ).toThrow()
        } )

    } )

    describe( `.createMany( Model.Schema )( count )( defaults || {} )`, () => {

        it( `returns a list`, () => {
            const a = Factory.createMany( {} )( 3 )( {} )
            expect( Array.isArray( a ) ).toBe( true )
        } )

        it( `returns 'count' empty objects`, () => {
            const a = Factory.createMany( {} )( 3 )( {} )
            expect( Array.isArray( a ) ).toBe( true )
            expect( a ).toHaveLength( 3 )
            expect( a ).toEqual( [{}, {}, {}] )
        } )

        it( `is curried`, () => {
            const a = Factory.createMany( {}, 5, {} )
            expect( Array.isArray( a ) ).toBe( true )
            expect( a ).toHaveLength( 5 )
            expect( a ).toEqual( [{}, {}, {}, {}, {}] )
        } )

    } )

} )
