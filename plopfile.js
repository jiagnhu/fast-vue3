/*
 * @GitHub: https://github.com/MaleWeb/vvtp
 * @version: 
 * @Author: 扫地盲僧
 * @Date: 2022-01-21 17:04:55
 * @LastEditors: BlindMonk
 * @LastEditTime: 2022-01-21 17:04:56
 */
module.exports = function (plop) {
    plop.setWelcomeMessage('请选择需要创建的模式：')
    plop.setGenerator('page', require('./plop-templates/page/prompt'))
    plop.setGenerator('component', require('./plop-templates/component/prompt'))
    plop.setGenerator('store', require('./plop-templates/store/prompt'))
}