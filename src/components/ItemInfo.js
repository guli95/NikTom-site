import React from "react";
import { Table } from "react-bootstrap";

const ItemInfo = (props) => (
  <Table hover striped bordered variant="info">
    <tbody>
      {props.raw1 ? (
        <tr>
          {props.raw1.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw2 ? (
        <tr>
          {props.raw2.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw3 ? (
        <tr>
          {props.raw3.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw4 ? (
        <tr>
          {props.raw4.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw5 ? (
        <tr>
          {props.raw5.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw6 ? (
        <tr>
          {props.raw6.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw7 ? (
        <tr>
          {props.raw7.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw8 ? (
        <tr>
          {props.raw8.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw9 ? (
        <tr>
          {props.raw9.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.raw10 ? (
        <tr>
          {props.raw10.map((data, key) => (
            <th key={key}>{data}</th>
          ))}
        </tr>
      ) : null}
      {props.options ? (
        <tr>{<th colSpan={props.colNumber}>Opcje:</th>}</tr>
      ) : null}
      {props.optionsItem1 ? (
        <tr>
          {props.optionsItem1.map((data, key) => (
            <th key={key} colSpan={data.len}>
              {data.name}
            </th>
          ))}
        </tr>
      ) : null}
      {props.optionsItem2 ? (
        <tr>
          {props.optionsItem2.map((data, key) => (
            <th key={key} colSpan={data.len}>
              {data.name}
            </th>
          ))}
        </tr>
      ) : null}
      {props.optionsItem3 ? (
        <tr>
          {props.optionsItem3.map((data, key) => (
            <th key={key} colSpan={data.len}>
              {data.name}
            </th>
          ))}
        </tr>
      ) : null}
      {props.optionsItem4 ? (
        <tr>
          {props.optionsItem4.map((data, key) => (
            <th key={key} colSpan={data.len}>
              {data.name}
            </th>
          ))}
        </tr>
      ) : null}
      {props.optionsItem5 ? (
        <tr>
          {props.optionsItem5.map((data, key) => (
            <th key={key} colSpan={data.len}>
              {data.name}
            </th>
          ))}
        </tr>
      ) : null}
      {props.optionsItem6 ? (
        <tr>
          {props.optionsItem6.map((data, key) => (
            <th key={key} colSpan={data.len}>
              {data.name}
            </th>
          ))}
        </tr>
      ) : null}
      {props.optionsItem7 ? (
        <tr>
          {props.optionsItem7.map((data, key) => (
            <th key={key} colSpan={data.len}>
              {data.name}
            </th>
          ))}
        </tr>
      ) : null}
      {props.optionsItem8 ? (
        <tr>
          {props.optionsItem8.map((data, key) => (
            <th key={key} colSpan={data.len}>
              {data.name}
            </th>
          ))}
        </tr>
      ) : null}
    </tbody>
  </Table>
);

export default ItemInfo;
