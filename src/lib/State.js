import * as r from "ramda"
import Factory from "./Factory";
import { Vector as v } from "@multimonos/p5-vectorxt";
import trace from "../trace";


const Schema = {
    scale: v.i2(), // overal scale
    vehicle: {}, // Car
    mountains: [], // Mountain[]
    track: {}, // Track
}

const State = {

    //model
    Schema: Schema,
    create: Factory.create( Schema ),

    //getter,setter
    setMountains: r.assoc( "mountains" ),
    getMountains: r.prop( "mountains" ),
    setVehicle: r.assoc( "vehicle" ),
    getVehicle: r.prop( "vehicle" ),
    setTrack: r.assoc( "track" ),
    getTrack: r.prop( "track" ),

    //fns
    next: r.pipe(
        r.identity,
        //nextFoobar
    ),

    scale: vec => // scale all scaleable objects
        r.pipe(
            r.identity,
            // r.map( r.over( lens.mountains, trace ) ),
// map(Mountain.scale, r.prop('mountains'))
        ),

}

export default State