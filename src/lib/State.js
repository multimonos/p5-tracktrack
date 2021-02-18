import * as r from "ramda"
import {Vector as vec} from "@multimonos/p5-vectorxt"

const defaults = {
    car: {// car to drive
    },
    mountains: [], // list of 3 vector objects
    track: [], // list of vectors
}

const State = {
////x
    create: r.pipe(
        r.merge( defaults ),
    ),

    next: r.pipe(
        r.identity,
        //nextFoobar
    )

}

export default State
//