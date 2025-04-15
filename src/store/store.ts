import {create} from 'zustand'
type bgtype={
    color:string,
    setColor:(colorname:string)=>void
    
}
export const bgStore=create<bgtype>((set)=>({
    color:'',
    setColor:(_color:string)=>set({ color: _color })
}))

