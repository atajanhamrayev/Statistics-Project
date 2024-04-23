import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import Preloader from "./../common/Preloader";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Table } from "antd";

const Question = (props) => {
  const [options, setOptions] = useState({
    data: props.choices,
    height: window.innerWidth < 400 ? Math.floor(window.innerWidth / 3) : 350,
    width: window.innerWidth < 400 ? Math.floor(window.innerWidth / 1.5) : 500,
    series: [
      {
        type: "donut",
        calloutLabelKey: "description",
        angleKey: "frequency",
        innerRadiusRatio: 0.5,

        innerLabels: [
          // {
          //   text: "Total",
          //   fontWeight: "bold",
          // },
          // {
          //   text: `${props.total_count}`,
          //   margin: 4,
          //   fontSize: 48,
          //   color: "blue",
          // },
        ],
      },
    ],
  });
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: props.choices,
    height: window.innerWidth < 400 ? Math.floor(window.innerWidth / 3) : 350,
    width: window.innerWidth < 400 ? Math.floor(window.innerWidth / 1.5) : 500,
    // Series: Defines which chart type and data to use
    series: [{ type: "bar", xKey: "description", yKey: "frequency" }],
  });

  let choiceBody = React.createRef();

  let updateChoiceBody = () => {
    props.updateNewChoiceBody(choiceBody.current.value);
  };

  let addChoice = () => {
    props.addChoice(props.uuid, choiceBody.current.input.value);
    choiceBody.current.value = "";
  };

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
      sorter: {
        compare: (a, b) => a.frequency - b.frequency,
        multiple: 1,
      },
    },

    {
      title: "Delete",
      key: "action",
      render: (text, record) => (
        <Button type="danger" onClick={() => handleDelete(record.uuid)}>
          Delete
        </Button>
      ),
    },
  ];
  const col = [
    {
      title: "Mean",
      dataIndex: "mean",
      key: "mean",
    },
    {
      title: "Varriance",
      dataIndex: "varriance",
      key: "varriance",
    },
    {
      title: "Standart Deviation",
      dataIndex: "standartDeviation",
      key: "standartDeviation",
    },
    {
      title: "Median ",
      dataIndex: "median",
      key: "median",
    },
    {
      title: "Lower",
      dataIndex: "lower",
      key: "lower",
    },
    {
      title: "Upper",
      dataIndex: "upper",
      key: "upper",
    },
    {
      title: "I.Q.R",
      dataIndex: "iqr",
      key: "iqr",
    },
  ];
  const handleDelete = (id) => {
    props.deleteChoice(props.uuid, id);
  };

  useEffect(() => {
    setOptions({ ...options, data: props.choices });
    setChartOptions({ ...chartOptions, data: props.choices });
  }, [props.choices, props.total_count]);

  const data = [
    {
      mean: props.mean,
      varriance: props.varriance,
      standartDeviation: props.standardDeviation,
      median: props.median,
      lower: props.lower,
      upper: props.upper,
      iqr: props.IQR,
    },
  ];

  if (!props.question) {
    return <Preloader />;
  }
  return (
    <div className="mx-[5px] mt-[-4px] p-[20px] bg-blue-100 flex flex-col w-full text-black rounded-lg rounded-t-none border-t-0 border-solid border-[3px] border-[#a5a29d]">
      <div className="titles flex flex-col gap-3">
        <h1>{props.question}</h1>
        <Table
          columns={col}
          dataSource={data}
          scroll={{
            x: 1300,
          }}
          pagination={false}
          bordered
        />

        <h2>Total Count: {props.total_count}</h2>

        <h3 className="font-normal text-lg">Description:</h3>
        <p>{props.description}</p>
      </div>
      <br />
      <Table columns={columns} dataSource={props.choices} />
      <br />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AgChartsReact options={options} />
        <AgChartsReact options={chartOptions} />
      </div>
      <div className="mt-5 w-full flex flex-wrap items-center justify-center">
        <Input
          className="w-[300px] mr-5"
          onChange={updateChoiceBody}
          ref={choiceBody}
          prefix={<PlusOutlined />}
        />

        <Button
          className="px-2 border-solid border-2 bg-blue-800 rounded-lg text-white"
          onClick={addChoice}
        >
          add choice
        </Button>
        {/* <Toaster /> */}
      </div>
    </div>
  );
};
export default Question;
