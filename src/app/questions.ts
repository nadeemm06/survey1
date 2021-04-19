export class Questions{
         sections:{section:string;
                   parameters:{parameter:string;
                               level:{ questionLevel:number;
                                       questions:{ questionNo:number;
                                                   questionDescription:string;
                                                   response:{option:string;points:number}[],}[],}[],}[],
                  }[];
                        
}