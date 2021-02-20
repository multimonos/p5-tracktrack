import * as r from "ramda"
import Factory from "./Factory";
import { Vector as v } from "@multimonos/p5-vectorxt"
import trace from "../trace";


const Schema = {
    points: [ //a clockwise set of 3 points for equilateral triangle
        v.zero(),
        v.ix().rotate( -Math.PI / 3 ),
        v.ix(),
    ]
}


const Mountain = {

    //model
    Schema: Schema,
    create: Factory.create( Schema ),
    createMany: Factory.createMany( Schema ),

    //getter,setter
    getPoints: r.prop( "points" ),
    setPoints: r.assoc( "points" ),

    //fns
    scale: ( vec, mountain ) =>
        Mountain.setPoints(
            r.map( v.scale( vec ), Mountain.getPoints( mountain ) )
        )( mountain ),

}

export default Mountain