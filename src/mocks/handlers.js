import { rest } from 'msw';

export const handlers = [rest.get('http://localhost:3000/data.json', (res, req, ctx) => {
  return res(
    ctx.json([
      {
        "customers": [
          {
            "id": "c1",
            "name": "Donnie Brasco",
            "purchases": [
              {
                "id": "p1",
                "testid": "donnie-brasco",
                "amount": "30.00",
                "date": "2022-06-04T00:00:00"
              },
              {
                "id": "p2",
                "amount": "51.00",
                "date": "2022-06-15T00:00:00"
              },
              {
                "id": "p3",
                "amount": "80.00",
                "date": "2022-07-01T00:00:00"
              },
              {
                "id": "p4",
                "amount": "110.00",
                "date": "2022-07-14T00:00:00"
              },
              {
                "id": "p5",
                "amount": "84.00",
                "date": "2022-08-03T00:00:00"
              },
              {
                "id": "p6",
                "amount": "144.00",
                "date": "2022-08-18T00:00:00"
              }
            ]
          },
          {
            "id": "c2",
            "name": "Henry Hill",
            "purchases": [
              {
                "id": "p1",
                "amount": "35.00",
                "date": "2022-06-02T00:00:00"
              },
              {
                "id": "p2",
                "amount": "65.00",
                "date": "2022-06-16T00:00:00"
              },
              {
                "id": "p3",
                "amount": "88.00",
                "date": "2022-07-02T00:00:00"
              },
              {
                "id": "p4",
                "amount": "111.00",
                "date": "2022-07-17T00:00:00"
              },
              {
                "id": "p5",
                "amount": "72.00",
                "date": "2022-08-06T00:00:00"
              },
              {
                "id": "p6",
                "amount": "123.00",
                "date": "2022-08-16T00:00:00"
              }
            ]
          },
          {
            "id": "c3",
            "name": "Moe Green",
            "purchases": [
              {
                "id": "p1",
                "amount": "37.00",
                "date": "2022-06-12T00:00:00"
              },
              {
                "id": "p2",
                "amount": "78.00",
                "date": "2022-06-20T00:00:00"
              },
              {
                "id": "p3",
                "amount": "92.00",
                "date": "2022-07-12T00:00:00"
              },
              {
                "id": "p4",
                "amount": "129.00",
                "date": "2022-07-27T00:00:00"
              },
              {
                "id": "p5",
                "amount": "22.00",
                "date": "2022-08-13T00:00:00"
              },
              {
                "id": "p6",
                "amount": "99.00",
                "date": "2022-08-21T00:00:00"
              }
            ]
          }
        ]
      },
    ])
  )
})]
