export function throwAlreadyLoaded(parentModule:any, moduleName:string){
    if(parentModule){
        throw new Error(`${moduleName} already loaded has been loaded, import core module in the appmodule only`);
    }
}