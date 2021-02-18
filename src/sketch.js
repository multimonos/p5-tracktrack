import p5 from "p5"
import State from "./lib/State";

export default p => {

    let state

    p.setup = () => {
        //drawing
        p.createCanvas( p.windowWidth, p.windowHeight )
        //state
        state = State.create()
    }

    p.draw = () => {
        p.background(200)

        state = State.next(state)

    }
}
