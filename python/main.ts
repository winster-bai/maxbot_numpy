//% color="#fa9b4d" iconWidth=50 iconHeight=40
namespace numpy{

    //% block="初始化numpy库" blockType="command"
    export function Sklearn_init(parameter: any, block: any) {
        Generator.addImport("import numpy as np");
    }


    //% block="计算[MEAN]的[CMODE]" blockType="reporter"
    //% CMODE.shadow="dropdown" CMODE.options="CMODE"
    //% MEAN.shadow="normal" MEAN.defl="data" 
    export function np_mean(parameter: any, block: any) {
        let cmode=parameter.CMODE.code;
        let mean=parameter.MEAN.code;   
        Generator.addCode(`np.${cmode}(${mean})`) 
    } 
    

    //% block="计算[CORR1]和[CORR2]的相关系数 索引[SY]" blockType="reporter"
    //% CORR1.shadow="normal" CORR1.defl="data" 
    //% CORR2.shadow="normal" CORR2.defl="data" 
    //% SY.shadow="normal" SY.defl="[0][0]" 
    export function np_corrcoef(parameter: any, block: any) {
        let corrcoef1=parameter.CORR1.code;   
        let corrcoef2=parameter.CORR2.code; 
        let sy=parameter.SY.code;   
        Generator.addCode(`np.corrcoef(${corrcoef1}, ${corrcoef2})${sy}`) 
    } 

    //% block="对象名[OBJ] 将数组[FRAME]的通道维度[WD]后增加一个维度" blockType="command"
    //% OBJ.shadow="normal"   OBJ.defl="img"
    //% FRAME.shadow="normal"   FRAME.defl="img"
    //% WD.shadow="normal"   WD.defl="0"
    export function np_expand(parameter: any, block: any){ 
        let obj = parameter.OBJ.code
        let frame = parameter.FRAME.code
        let wd = parameter.WD.code
        Generator.addCode(`${obj} = np.expand_dims(${frame}, axis=${wd})`)
   
   }

    //% block="计算[OBJ]的最大值位置" blockType="reporter"
    //% OBJ.shadow="normal" OBJ.defl="data" 
    export function np_argmax(parameter: any, block: any){
        let obj = parameter.OBJ.code
        Generator.addCode(`np.argmax(${obj})`)
    }

    //% block="创建Numpy数组[OBJ]" blockType="reporter"
    //% OBJ.shadow="normal" OBJ.defl="[1,2,3]" 
    export function np_array(parameter: any, block: any){
        let obj = parameter.OBJ.code
        Generator.addCode(`np.array(${obj})`)
    }

    //% block="创建元素都为1的Numpy数组 维度为[WD] 数据类型[TYPE]" blockType="reporter"
    //% WD.shadow="normal" WD.defl="(5, 5)"
    //% TYPE.shadow="normal" TYPE.defl="np.uint8"
    export function np_one(parameter: any, block: any){
        let wd = parameter.WD.code
        let type = parameter.TYPE.code
        Generator.addCode(`np.ones(${wd}, ${type})`)
    }

    //% block="获取最大值[OBJ]" blockType="reporter"
    //% OBJ.shadow="normal" OBJ.defl="[1,2,3]" 
    export function np_max(parameter: any, block: any){
        let obj = parameter.OBJ.code
        Generator.addCode(`np.max(${obj})`)
    }

    //% block="将[OBJ]转化成16位有符号整数" blockType="reporter"
    //% OBJ.shadow="normal" OBJ.defl="123" 
    export function np_init16(parameter: any, block: any){
        let obj = parameter.OBJ.code
        Generator.addCode(`np.int16(${obj})`)
    }
}