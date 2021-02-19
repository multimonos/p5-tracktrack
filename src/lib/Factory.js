import {
    equals,
    identity,
    ifElse,
    merge,
    pipe,
    repeat,
    type,
    curry,
} from "ramda";

//fns
const isObject = pipe( type, equals( "Object" ) )
const throwInvalidArgumentError = () => { throw new Error( `Argument should be of type "object"` ) }


const Factory = {

    //usage: Factory.create( Model.Schema )( defaults || {} )
    //usage: Factory.create( Model.Schema, defaults || {} )
    create: curry( ( schema, defaults ) =>
        pipe(
            ifElse( isObject, identity, throwInvalidArgumentError ),
            merge( schema ),
        )( defaults ) ),

    //usage: Factory.createMany(5)( Model.Schema )( defaults || {} )
    //usage: Factory.createMany(5, Model.Schema, defaults || {} )
    createMany: curry( ( schema, count, defaults ) =>
        repeat( Factory.create( schema, defaults ), count )
    )

}

export default Factory