import React, { Component } from 'react';
import Image from './Image';
class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Satu
                        <Image linkGambar='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5ndcrxabqzIgmA-XTI0mZQHaEK%26pid%3DApi&f=1' />
                    </li>
                    <li>
                        Dua
                        <Image linkGambar='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5ndcrxabqzIgmA-XTI0mZQHaEK%26pid%3DApi&f=1' />
                    </li>
                    <li>
                        Tiga
                        <Image linkGambar='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5ndcrxabqzIgmA-XTI0mZQHaEK%26pid%3DApi&f=1' />
                    </li>
                    <li>
                        Empat
                        <Image linkGambar='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5ndcrxabqzIgmA-XTI0mZQHaEK%26pid%3DApi&f=1' />
                    </li>
                </ol>
            </div>
        );
    }
} export default List;
