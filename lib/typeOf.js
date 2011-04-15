/**
 * Sane replacement for the <code>typeof</code> operator which safely
 * distinguishes arrays and nulls from other types of value. The
 * following table compares the two:
 * <table>
 *   <thead>
 *     <tr><th>Input</th>   <th><code>typeOf</code></th>  <th><code>typeof</code></th></tr>
 *   </thead>
 *   <tbody>
 *     <tr><td>Object</td>      <td>'object'</td>           <td>'object'</td></tr>
 *     <tr><td>Array</td>       <td>'array'</td>            <td><em>'object'</em></td></tr>
 *     <tr><td>Function</td>    <td>'function'</td>         <td>'function'</td></tr>
 *     <tr><td>String</td>      <td>'string'</td>           <td>'string'</td></tr>
 *     <tr><td>Number</td>      <td>'number'</td>           <td>'number'</td></tr>
 *     <tr><td>Boolean</td>     <td>'boolean'</td>          <td>'boolean'</td></tr>
 *     <tr><td>undefined</td>   <td>'undefined'</td>        <td>'undefined'</td></tr>
 *     <tr><td>null</td>        <td>'null'</td>             <td><em>'object'</em></td></tr>
 *   </tbody>
 * </table>
 */
module.exports = function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (typeof value.length === 'number' &&
                    !(value.propertyIsEnumerable('length')) &&
                    typeof value.splice === 'function') {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
};
