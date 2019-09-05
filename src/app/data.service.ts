import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let todos = [{
      "id": 1,
      "name": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "createdDate": "2019-02-11",
      "finishedDate": "2019/02/18",
      "done": true
    }, {
      "id": 2,
      "name": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      "createdDate": "2019-02-20",
      "finishedDate": "2019/04/26",
      "done": true
    }, {
      "id": 3,
      "name": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "createdDate": "2019-08-22",
      "finishedDate": null,
      "done": false
    }, {
      "id": 4,
      "name": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
      "createdDate": "2019-06-22",
      "finishedDate": null,
      "done": false
    }, {
      "id": 5,
      "name": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      "createdDate": "2019-03-11",
      "finishedDate": null,
      "done": false
    }, {
      "id": 6,
      "name": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "createdDate": "2018-12-06",
      "finishedDate": "2018/09/27",
      "done": true
    }, {
      "id": 7,
      "name": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
      "createdDate": "2018-12-01",
      "finishedDate": null,
      "done": false
    }, {
      "id": 8,
      "name": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "createdDate": "2018-10-20",
      "finishedDate": "2019/03/01",
      "done": true
    }, {
      "id": 9,
      "name": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "createdDate": "2019-07-15",
      "finishedDate": "2019/04/08",
      "done": true
    }, {
      "id": 10,
      "name": "Nulla tellus.",
      "createdDate": "2019-01-21",
      "finishedDate": "2019/02/10",
      "done": true
    }, {
      "id": 11,
      "name": "Vestibulum sed magna at nunc commodo placerat.",
      "createdDate": "2019-02-20",
      "finishedDate": "2019/05/26",
      "done": true
    }, {
      "id": 12,
      "name": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "createdDate": "2018-09-17",
      "finishedDate": "2018/09/05",
      "done": true
    }, {
      "id": 13,
      "name": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
      "createdDate": "2018-11-08",
      "finishedDate": null,
      "done": false
    }, {
      "id": 14,
      "name": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
      "createdDate": "2019-04-12",
      "finishedDate": null,
      "done": false
    }, {
      "id": 15,
      "name": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
      "createdDate": "2018-12-22",
      "finishedDate": "2018/11/14",
      "done": true
    }, {
      "id": 16,
      "name": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
      "createdDate": "2018-10-09",
      "finishedDate": null,
      "done": false
    }, {
      "id": 17,
      "name": "Integer a nibh. In quis justo.",
      "createdDate": "2018-12-14",
      "finishedDate": "2018/09/23",
      "done": true
    }, {
      "id": 18,
      "name": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "createdDate": "2018-10-21",
      "finishedDate": null,
      "done": false
    }, {
      "id": 19,
      "name": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
      "createdDate": "2018-12-13",
      "finishedDate": "2019/03/20",
      "done": true
    }, {
      "id": 20,
      "name": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "createdDate": "2019-01-25",
      "finishedDate": null,
      "done": false
    }];

    let teams = [
      {
        "name": "Uruguay",
        "id": 1
      },
      {
        "name": "Venezuela",
        "id": 2
      },
      {
        "name": "Perú",
        "id": 3
      },
      {
        "name": "Brasil",
        "id": 4
      },
      {
        "name": "Chile",
        "id": 5
      },
      {
        "name": "Argentina",
        "id": 6
      },
      {
        "name": "Bolivia",
        "id": 7
      },
      {
        "name": "Ecuador",
        "id": 8
      },
      {
        "name": "Colombia",
        "id": 9
      },
      {
        "name": "Paraguay",
        "id": 10
      }
    ];
    let matches = [
      {
        "local": "Uruguay",
        "visitor": "Paraguay",
        "localScore": 3,
        "visitorScore": 2,
        "round": 1,


        "id": 1
      },
      {
        "local": "Venezuela",
        "visitor": "Colombia",
        "localScore": 3,
        "visitorScore": 3,
        "round": 1,


        "id": 2
      },
      {
        "local": "Perú",
        "visitor": "Ecuador",
        "localScore": 0,
        "visitorScore": 3,
        "round": 1,


        "id": 3
      },
      {
        "local": "Brasil",
        "visitor": "Bolivia",
        "localScore": 2,
        "visitorScore": 2,
        "round": 1,


        "id": 4
      },
      {
        "local": "Chile",
        "visitor": "Argentina",
        "localScore": 1,
        "visitorScore": 1,
        "round": 1,


        "id": 5
      },
      {
        "local": "Paraguay",
        "visitor": "Argentina",
        "localScore": 3,
        "visitorScore": 1,
        "round": 2,


        "id": 6
      },
      {
        "local": "Bolivia",
        "visitor": "Chile",
        "localScore": 3,
        "visitorScore": 3,
        "round": 2,


        "id": 7
      },
      {
        "local": "Ecuador",
        "visitor": "Brasil",
        "localScore": 0,
        "visitorScore": 2,
        "round": 2,


        "id": 8
      },
      {
        "local": "Colombia",
        "visitor": "Perú",
        "localScore": 2,
        "visitorScore": 3,
        "round": 2,


        "id": 9
      },
      {
        "local": "Uruguay",
        "visitor": "Venezuela",
        "localScore": 1,
        "visitorScore": 3,
        "round": 2,


        "id": 10
      },
      {
        "local": "Venezuela",
        "visitor": "Paraguay",
        "localScore": 2,
        "visitorScore": 1,
        "round": 3,


        "id": 11
      },
      {
        "local": "Perú",
        "visitor": "Uruguay",
        "localScore": 3,
        "visitorScore": 2,
        "round": 3,


        "id": 12
      },
      {
        "local": "Brasil",
        "visitor": "Colombia",
        "localScore": 3,
        "visitorScore": 3,
        "round": 3,


        "id": 13
      },
      {
        "local": "Chile",
        "visitor": "Ecuador",
        "localScore": 0,
        "visitorScore": 1,
        "round": 3,


        "id": 14
      },
      {
        "local": "Argentina",
        "visitor": "Bolivia",
        "localScore": 1,
        "visitorScore": 3,
        "round": 3,


        "id": 15
      },
      {
        "local": "Paraguay",
        "visitor": "Bolivia",
        "localScore": 0,
        "visitorScore": 1,
        "round": 4,


        "id": 16
      },
      {
        "local": "Ecuador",
        "visitor": "Argentina",
        "localScore": 2,
        "visitorScore": 1,
        "round": 4,


        "id": 17
      },
      {
        "local": "Colombia",
        "visitor": "Chile",
        "localScore": 1,
        "visitorScore": 1,
        "round": 4,


        "id": 18
      },
      {
        "local": "Uruguay",
        "visitor": "Brasil",
        "localScore": 3,
        "visitorScore": 3,
        "round": 4,


        "id": 19
      },
      {
        "local": "Venezuela",
        "visitor": "Perú",
        "localScore": 3,
        "visitorScore": 1,
        "round": 4,


        "id": 20
      },
      {
        "local": "Perú",
        "visitor": "Paraguay",
        "localScore": 0,
        "visitorScore": 0,
        "round": 5,


        "id": 21
      },
      {
        "local": "Brasil",
        "visitor": "Venezuela",
        "localScore": 3,
        "visitorScore": 1,
        "round": 5,


        "id": 22
      },
      {
        "local": "Chile",
        "visitor": "Uruguay",
        "localScore": 2,
        "visitorScore": 3,
        "round": 5,


        "id": 23
      },
      {
        "local": "Argentina",
        "visitor": "Colombia",
        "localScore": 3,
        "visitorScore": 1,
        "round": 5,


        "id": 24
      },
      {
        "local": "Bolivia",
        "visitor": "Ecuador",
        "localScore": 0,
        "visitorScore": 2,
        "round": 5,


        "id": 25
      },
      {
        "local": "Paraguay",
        "visitor": "Ecuador",
        "localScore": 0,
        "visitorScore": 2,
        "round": 6,


        "id": 26
      },
      {
        "local": "Colombia",
        "visitor": "Bolivia",
        "localScore": 0,
        "visitorScore": 1,
        "round": 6,


        "id": 27
      },
      {
        "local": "Uruguay",
        "visitor": "Argentina",
        "localScore": 0,
        "visitorScore": 0,
        "round": 6,


        "id": 28
      },
      {
        "local": "Venezuela",
        "visitor": "Chile",
        "localScore": 3,
        "visitorScore": 0,
        "round": 6,


        "id": 29
      },
      {
        "local": "Perú",
        "visitor": "Brasil",
        "localScore": 1,
        "visitorScore": 1,
        "round": 6,


        "id": 30
      },
      {
        "local": "Brasil",
        "visitor": "Paraguay",
        "localScore": 3,
        "visitorScore": 1,
        "round": 7,


        "id": 31
      },
      {
        "local": "Chile",
        "visitor": "Perú",
        "localScore": 0,
        "visitorScore": 0,
        "round": 7,


        "id": 32
      },
      {
        "local": "Argentina",
        "visitor": "Venezuela",
        "localScore": 1,
        "visitorScore": 2,
        "round": 7,


        "id": 33
      },
      {
        "local": "Bolivia",
        "visitor": "Uruguay",
        "localScore": 0,
        "visitorScore": 2,
        "round": 7,


        "id": 34
      },
      {
        "local": "Ecuador",
        "visitor": "Colombia",
        "localScore": 3,
        "visitorScore": 0,
        "round": 7,


        "id": 35
      },
      {
        "local": "Paraguay",
        "visitor": "Colombia",
        "localScore": 0,
        "visitorScore": 0,
        "round": 8,


        "id": 36
      },
      {
        "local": "Uruguay",
        "visitor": "Ecuador",
        "localScore": 3,
        "visitorScore": 0,
        "round": 8,


        "id": 37
      },
      {
        "local": "Venezuela",
        "visitor": "Bolivia",
        "localScore": 1,
        "visitorScore": 1,
        "round": 8,


        "id": 38
      },
      {
        "local": "Perú",
        "visitor": "Argentina",
        "localScore": 1,
        "visitorScore": 0,
        "round": 8,


        "id": 39
      },
      {
        "local": "Brasil",
        "visitor": "Chile",
        "localScore": 3,
        "visitorScore": 1,
        "round": 8,


        "id": 40
      },
      {
        "local": "Chile",
        "visitor": "Paraguay",
        "localScore": 0,
        "visitorScore": 3,
        "round": 9,


        "id": 41
      },
      {
        "local": "Argentina",
        "visitor": "Brasil",
        "localScore": 2,
        "visitorScore": 0,
        "round": 9,


        "id": 42
      },
      {
        "local": "Bolivia",
        "visitor": "Perú",
        "localScore": 0,
        "visitorScore": 3,
        "round": 9,


        "id": 43
      },
      {
        "local": "Ecuador",
        "visitor": "Venezuela",
        "localScore": 0,
        "visitorScore": 2,
        "round": 9,


        "id": 44
      },
      {
        "local": "Colombia",
        "visitor": "Uruguay",
        "localScore": 2,
        "visitorScore": 1,
        "round": 9,


        "id": 45
      },
      {
        "local": "Paraguay",
        "visitor": "Uruguay",
        "localScore": 2,
        "visitorScore": 2,
        "round": 10,


        "id": 46
      },
      {
        "local": "Colombia",
        "visitor": "Venezuela",
        "localScore": 2,
        "visitorScore": 1,
        "round": 10,


        "id": 47
      },
      {
        "local": "Ecuador",
        "visitor": "Perú",
        "localScore": 1,
        "visitorScore": 2,
        "round": 10,


        "id": 48
      },
      {
        "local": "Bolivia",
        "visitor": "Brasil",
        "localScore": 0,
        "visitorScore": 0,
        "round": 10,


        "id": 49
      },
      {
        "local": "Argentina",
        "visitor": "Chile",
        "localScore": 0,
        "visitorScore": 2,
        "round": 10,


        "id": 50
      },
      {
        "local": "Argentina",
        "visitor": "Paraguay",
        "localScore": 1,
        "visitorScore": 2,
        "round": 11,


        "id": 51
      },
      {
        "local": "Chile",
        "visitor": "Bolivia",
        "localScore": 2,
        "visitorScore": 1,
        "round": 11,


        "id": 52
      },
      {
        "local": "Brasil",
        "visitor": "Ecuador",
        "localScore": 3,
        "visitorScore": 1,
        "round": 11,


        "id": 53
      },
      {
        "local": "Perú",
        "visitor": "Colombia",
        "localScore": 0,
        "visitorScore": 0,
        "round": 11,


        "id": 54
      },
      {
        "local": "Venezuela",
        "visitor": "Uruguay",
        "localScore": 1,
        "visitorScore": 1,
        "round": 11,


        "id": 55
      },
      {
        "local": "Paraguay",
        "visitor": "Venezuela",
        "localScore": 1,
        "visitorScore": 0,
        "round": 12,


        "id": 56
      },
      {
        "local": "Uruguay",
        "visitor": "Perú",
        "localScore": 3,
        "visitorScore": 0,
        "round": 12,


        "id": 57
      },
      {
        "local": "Colombia",
        "visitor": "Brasil",
        "localScore": 1,
        "visitorScore": 2,
        "round": 12,


        "id": 58
      },
      {
        "local": "Ecuador",
        "visitor": "Chile",
        "localScore": 0,
        "visitorScore": 2,
        "round": 12,


        "id": 59
      },
      {
        "local": "Bolivia",
        "visitor": "Argentina",
        "localScore": 0,
        "visitorScore": 0,
        "round": 12,


        "id": 60
      },
      {
        "local": "Bolivia",
        "visitor": "Paraguay",
        "localScore": 1,
        "visitorScore": 3,
        "round": 13,


        "id": 61
      },
      {
        "local": "Argentina",
        "visitor": "Ecuador",
        "localScore": 3,
        "visitorScore": 1,
        "round": 13,


        "id": 62
      },
      {
        "local": "Chile",
        "visitor": "Colombia",
        "localScore": 3,
        "visitorScore": 0,
        "round": 13,


        "id": 63
      },
      {
        "local": "Brasil",
        "visitor": "Uruguay",
        "localScore": 3,
        "visitorScore": 0,
        "round": 13,


        "id": 64
      },
      {
        "local": "Perú",
        "visitor": "Venezuela",
        "localScore": 2,
        "visitorScore": 0,
        "round": 13,


        "id": 65
      },
      {
        "local": "Paraguay",
        "visitor": "Perú",
        "localScore": 0,
        "visitorScore": 3,
        "round": 14,


        "id": 66
      },
      {
        "local": "Venezuela",
        "visitor": "Brasil",
        "localScore": 0,
        "visitorScore": 3,
        "round": 14,


        "id": 67
      },
      {
        "local": "Uruguay",
        "visitor": "Chile",
        "localScore": 2,
        "visitorScore": 2,
        "round": 14,


        "id": 68
      },
      {
        "local": "Colombia",
        "visitor": "Argentina",
        "localScore": 1,
        "visitorScore": 2,
        "round": 14,


        "id": 69
      },
      {
        "local": "Ecuador",
        "visitor": "Bolivia",
        "localScore": 0,
        "visitorScore": 3,
        "round": 14,


        "id": 70
      },
      {
        "local": "Ecuador",
        "visitor": "Paraguay",
        "localScore": 0,
        "visitorScore": 0,
        "round": 15,


        "id": 71
      },
      {
        "local": "Bolivia",
        "visitor": "Colombia",
        "localScore": 1,
        "visitorScore": 0,
        "round": 15,


        "id": 72
      },
      {
        "local": "Argentina",
        "visitor": "Uruguay",
        "localScore": 3,
        "visitorScore": 1,
        "round": 15,


        "id": 73
      },
      {
        "local": "Chile",
        "visitor": "Venezuela",
        "localScore": 1,
        "visitorScore": 2,
        "round": 15,


        "id": 74
      },
      {
        "local": "Brasil",
        "visitor": "Perú",
        "localScore": 3,
        "visitorScore": 1,
        "round": 15,


        "id": 75
      },
      {
        "local": "Paraguay",
        "visitor": "Brasil",
        "localScore": 2,
        "visitorScore": 1,
        "round": 16,


        "id": 76
      },
      {
        "local": "Perú",
        "visitor": "Chile",
        "localScore": 0,
        "visitorScore": 1,
        "round": 16,


        "id": 77
      },
      {
        "local": "Venezuela",
        "visitor": "Argentina",
        "localScore": 1,
        "visitorScore": 3,
        "round": 16,


        "id": 78
      },
      {
        "local": "Uruguay",
        "visitor": "Bolivia",
        "localScore": 3,
        "visitorScore": 0,
        "round": 16,


        "id": 79
      },
      {
        "local": "Colombia",
        "visitor": "Ecuador",
        "localScore": 3,
        "visitorScore": 1,
        "round": 16,


        "id": 80
      },
      {
        "local": "Colombia",
        "visitor": "Paraguay",
        "localScore": 2,
        "visitorScore": 1,
        "round": 17,


        "id": 81
      },
      {
        "local": "Ecuador",
        "visitor": "Uruguay",
        "localScore": 3,
        "visitorScore": 0,
        "round": 17,


        "id": 82
      },
      {
        "local": "Bolivia",
        "visitor": "Venezuela",
        "localScore": 0,
        "visitorScore": 0,
        "round": 17,


        "id": 83
      },
      {
        "local": "Argentina",
        "visitor": "Perú",
        "localScore": 0,
        "visitorScore": 0,
        "round": 17,


        "id": 84
      },
      {
        "local": "Chile",
        "visitor": "Brasil",
        "localScore": 0,
        "visitorScore": 1,
        "round": 17,


        "id": 85
      },
      {
        "local": "Paraguay",
        "visitor": "Chile",
        "localScore": 3,
        "visitorScore": 4,
        "round": 18,


        "id": 86
      },
      {
        "local": "Brasil",
        "visitor": "Argentina",
        "localScore": 1,
        "visitorScore": 3,
        "round": 18,


        "id": 87
      },
      {
        "local": "Perú",
        "visitor": "Bolivia",
        "localScore": 1,
        "visitorScore": 2,
        "round": 18,


        "id": 88
      },
      {
        "local": "Venezuela",
        "visitor": "Ecuador",
        "localScore": 3,
        "visitorScore": 1,
        "round": 18,


        "id": 89
      },
      {
        "local": "Uruguay",
        "visitor": "Colombia",
        "localScore": 3,
        "visitorScore": 1,
        "round": 18,


        "id": 90
      }
    ];

    let stats = [{ "diff": 15, "draws": 5, "games": 18, "id": 1, "losts": 3, "score": 35, "wins": 10, "team": { "name": "Brasil", "id": 4 } }, { "diff": 5, "draws": 3, "games": 18, "id": 2, "losts": 6, "score": 30, "wins": 9, "team": { "name": "Venezuela", "id": 2 } }, { "diff": 4, "draws": 5, "games": 18, "id": 3, "losts": 6, "score": 26, "wins": 7, "team": { "name": "Uruguay", "id": 1 } }, { "diff": 0, "draws": 5, "games": 18, "id": 4, "losts": 6, "score": 26, "wins": 7, "team": { "name": "Perú", "id": 3 } }, { "diff": 3, "draws": 4, "games": 18, "id": 5, "losts": 7, "score": 25, "wins": 7, "team": { "name": "Argentina", "id": 6 } }, { "diff": -4, "draws": 6, "games": 18, "id": 6, "losts": 6, "score": 24, "wins": 6, "team": { "name": "Bolivia", "id": 7 } }, { "diff": -2, "draws": 5, "games": 18, "id": 7, "losts": 7, "score": 23, "wins": 6, "team": { "name": "Paraguay", "id": 10 } }, { "diff": -6, "draws": 1, "games": 18, "id": 8, "losts": 10, "score": 22, "wins": 7, "team": { "name": "Ecuador", "id": 8 } }, { "diff": -3, "draws": 6, "games": 18, "id": 9, "losts": 7, "score": 21, "wins": 5, "team": { "name": "Chile", "id": 5 } }, { "diff": -12, "draws": 4, "games": 18, "id": 10, "losts": 10, "score": 16, "wins": 4, "team": { "name": "Colombia", "id": 9 } }];
 
    return {
      stats, teams, matches, todos
    }
  }
}