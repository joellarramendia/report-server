import { Column, Content } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers";

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20]
}

const currentDate: Column = {
  text: DateFormatter.getDDMMMMYYY(new Date()),
  alignment: 'right',
  margin: [20, 30],
  width: 180
}

interface HeaderOptions {
  title?: string
  subTitle?: string
  showLogo?: boolean
  showDate?: boolean
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showLogo = true, showDate = true } = options;

  const headerLogo: Content = showLogo ? logo : { text: '' };
  const headerDate: Content = showDate ? currentDate : { text: '' }

  const headerSubtitle: Content = subTitle ? {
    text: subTitle,
    alignment: 'center',
    margin: [0, 2, 0, 0],
    style: {
      bold: true,
      fontSize: 16
    }
  } : { text: '' }


  const headerTitle: Content = title
    ? {
      stack: [
        {
          text: title,
          alignment: 'center',
          margin: [0, 15, 0, 0],
          style: {
            bold: true,
            fontSize: 22
          }
        },
        headerSubtitle
      ]
      // text: title,
      // style: {
      //   bold: true,
      // },
    }
    : { text: '' };

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};