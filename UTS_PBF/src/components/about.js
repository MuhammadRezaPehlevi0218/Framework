import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h2 align="center">About Me</h2> <br></br>
                <table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
                    <tr>
                        <td><strong>About me</strong></td>
                    </tr>
                    <tr>
                        <td>Nama :</td>
                        <td>Muhammad Reza Pahlevi</td>
                        <td rowspan="10" align="center"><img src="./images/myImages.jpg"  width="280" height="313"/></td>
                    </tr>
                    <tr>
                        <td>Jurusan :</td>
                        <td>Teknologi Informasi</td>
                    </tr>
                    <tr>
                        <td>Kelas :</td>
                        <td>TI-3D</td>
                    </tr>
                    <tr>
                        <td>NIM :</td>
                        <td>1941720230</td>
                    </tr>
                    <tr>
                        <td>GitHub :</td>
                        <td>https://github.com/MuhammadRezaPehlevi0218</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default About;