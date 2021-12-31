import { spawn } from "child_process";
sap.ui.define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    
    return{
         prettyDate : function(now, time){
             var date = new date( time || ""),
                 diff = (((new Date(now)).getTime() - date.getTime())/1000),
                 dayDiff = Math.floor(diff/86400);

                 if(isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 3){
                     return;
                 }

                 
                 var oResult = dayDiff === 0 && (
                    diff < 60 && "just now"   
                 )
                 return  oResult;

            
         }
    }
});
