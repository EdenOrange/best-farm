import React from 'react';
import './App.scss';

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <div style={{height:'2000px', marginTop:'100px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultrices nibh. Etiam non ex nisl. Morbi vehicula eu libero quis feugiat. Nullam enim elit, eleifend quis sagittis efficitur, faucibus vitae eros. Fusce sagittis metus sed ante rhoncus luctus. Sed vulputate fringilla nibh, nec sodales sem semper a. Sed dictum nisi molestie lorem dictum ultrices. Cras congue malesuada mauris a fermentum. Cras ut scelerisque nibh, eu mollis dui. Mauris tristique enim tellus, a facilisis diam condimentum et.

Suspendisse faucibus libero et sollicitudin imperdiet. Integer auctor nibh leo, sit amet sollicitudin massa condimentum eu. Nullam imperdiet velit risus, condimentum condimentum ex eleifend tincidunt. Praesent at elit bibendum, laoreet erat eget, venenatis orci. Quisque mi magna, luctus eget dui id, porta tincidunt metus. Sed cursus euismod odio id feugiat. Donec ligula mauris, volutpat et ipsum maximus, ultricies consequat nisi.

Nulla mauris nisi, consectetur vitae lacus in, hendrerit suscipit ipsum. Donec tempor nec sapien non fringilla. Quisque eu laoreet ex. Ut ante libero, laoreet in porta quis, posuere ac justo. Integer semper elementum mauris, eget molestie arcu ullamcorper non. Nunc pharetra nunc mollis, tempor felis in, ullamcorper nisi. Integer pretium sed sem sit amet blandit. Ut ut lacus eget felis consequat malesuada. Nunc a ipsum sit amet sapien blandit imperdiet. Fusce a dui nisl.

Pellentesque porttitor quam in efficitur posuere. Nunc tempus dolor quis magna sagittis tempus. Nulla accumsan risus vitae enim posuere, sit amet dapibus nisi dignissim. Cras nisi nisl, congue a eros eu, vehicula lobortis augue. Nunc tempus, leo consectetur tristique congue, mi metus mollis sem, laoreet fringilla leo eros a urna. Proin auctor mi sem, vel sollicitudin tellus venenatis quis. Sed vel dignissim tellus. Duis nec pellentesque leo. Morbi posuere tellus sit amet turpis ultrices congue. Praesent egestas egestas ex sit amet interdum. Integer eu efficitur quam.

Proin nulla nisi, placerat eu quam in, pulvinar lobortis tellus. Cras mattis felis sit amet tincidunt vestibulum. Integer in porttitor erat. Etiam sollicitudin, metus sit amet ullamcorper rutrum, enim diam placerat tellus, quis luctus metus nisl vel felis. Cras quis auctor enim, vitae elementum lorem. Nam tempus sagittis ipsum ac efficitur. In lacinia accumsan enim, non interdum erat venenatis nec. Nullam dapibus eu nulla nec blandit. Nullam in magna ultricies, mollis elit a, ultrices neque. Quisque in turpis in quam feugiat accumsan. In placerat velit sed elit pretium tincidunt. Sed at egestas felis, ut feugiat metus. Praesent commodo quis massa nec eleifend. Nulla sit amet nulla luctus, pharetra leo quis, pulvinar massa. Pellentesque enim nisi, sodales ut vulputate eget, feugiat sed turpis. Pellentesque blandit eu quam ut vehicula.
        </div>
      </div>
    );
  }
}

export default App;
