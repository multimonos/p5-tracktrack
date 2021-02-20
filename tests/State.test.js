import State from "../src/lib/State"

describe( `State`, () => {

    describe( `.create()`, () => {
        it( `returns an object`, () => {
            expect( typeof State.create({}) ).toEqual( 'object' )
        } )
    } )

    describe( `.getMountains()`, () => {

        it( `returns an array`, () => {
            const m = State.getMountains( State.create({}) )
            console.log( m )
            expect( Array.isArray( m ) ).toBe( true )
        } )

    } )

} )