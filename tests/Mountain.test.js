import { Vector as v } from "@multimonos/p5-vectorxt"
import Mountain from "../src/lib/Mountain";


describe( `Mountain`, () => {

    describe( `.create( {} )`, () => {

        it( `returns a a Mountain object`, () => {
            const m = Mountain.create( {} )
            expect( typeof m ).toEqual( 'object' )
            expect( m ).toHaveProperty( 'points' )
        } )

    } )

    describe( `.createMany( count , {} )`, () => {
        it( `returns an array of N Mountain objects`, () => {
            const cnt = 5
            const objs = Mountain.createMany( cnt, {} )
            expect( objs ).toHaveLength( cnt )
        } )
    } )

    describe( `.scale()`, () => {
        it( `returns a a Mountain object`, () => {
            const m = Mountain.scale( v.of( 2 ), Mountain.create( {} ) )
            expect( typeof m ).toEqual( 'object' )
            expect( m ).toHaveProperty( 'points' )
        } )

        it( `scales each Mountain.points by the scaling vector`, () => {
            const m = Mountain.create( {} )
            const s = Mountain.scale( v.of2( 5 ), m )
            console.log(m, s)
            expect( s.points[0] ).toEqual( v.zero() )
            expect( s.points[1].x ).toBeCloseTo( 2.5 )
            expect( s.points[1].y ).toBeCloseTo( -4.33, 2 )
            expect( s.points[1].z ).toEqual( 0 )
            expect( s.points[2] ).toEqual( v.ofx( 5 ) )
        } )
    } )

} )
