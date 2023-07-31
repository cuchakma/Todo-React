import React from 'react';

export function getValue( key ) {
    return localStorage.getItem( key ) === null ? [] : JSON.parse( localStorage.getItem( key ) );
}


export function setValue( key, value ) {
    return localStorage.setItem(key, value)
}