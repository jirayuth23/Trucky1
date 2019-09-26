import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

export default class IWeb extends Component {
  render() {
    return (
	<WebView
        source={{uri: 'https://www.google.com/maps/place/%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%87%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87/@8.2757088,99.8680136,13.6z/data=!4m8!1m2!2m1!1z4Lia4LmI4Lit4LiU4Li04LiZ!3m4!1s0x30525531e12f3975:0xd2520382507ed1cc!8m2!3d8.2830922!4d99.884519'}}
        style={{marginTop: 20}}
      />
    );
  }
}
