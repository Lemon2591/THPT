import React from "react";
import { NavLink } from "react-router-dom";
import "./ComponentSearch.css";
import { Table } from "antd";
import TableContainer from "./ContainerTable";
import { useState } from "react";
import { useEffect } from "react";

import { SettingOutlined } from "@ant-design/icons";
import { Button, Cascader, Input, Select, Space } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function ComponentSearch() {
  const [hideTable, setHideTable] = useState(false);

  const [valueSection, setValueSection] = useState("");
  const [valueInput, setValueInput] = useState("");

  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(true);
  const [err, setErr] = useState(false);
  const [err1, setErr1] = useState(false);

  const dataGeted = useSelector((state) => {
    return state.GetDataPointReducer.data;
  });

  const handeChangeValueInput = (e) => {
    setValueInput(e.target.value);
  };

  const handeChangeValueSection = (e) => {
    setValueSection(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const handleSubmit = () => {
      dispatch({ type: "ON_GET_DATA" });
    };
    handleSubmit();
  }, []);

  const handleGetValue = () => {
    if (valueInput.length === 0 || valueSection.length === 0) {
      setErr(true);
      setHideTable(false);
    } else {
      if (valueInput > 40) {
        setErr1(true);
      } else {
        const arr1 = dataGeted.filter((data) => {
          return Number(valueInput) >= data.entry_normalize_score
            ? true
            : false;
        });

        if (arr1.length > 0) {
          setNoData(false);
        }
        setData(arr1);
        setHideTable(true);
        setErr(false);
      }
    }
  };

  const closeTable = () => {
    setHideTable(false);
  };

  return (
    <>
      <div className="form-import-container">
        <div className="form-import-content">
          <div className="form-import">
            <div className="title-content">
              <div className="title">
                <h2>
                  {" "}
                  ??I???M CHU???N C??C TR?????NG ?????I H???C 2021 V?? G???I ?? ????NG K?? NGUY???N
                  V???NG
                </h2>
              </div>
              <div className="body-text">
                <div className="body-text-router">
                  <NavLink
                    className="effect-hover"
                    to="/"
                    style={{ color: "#fff" }}
                  >
                    ??i???m chu???n c??c tr?????ng ?????i h???c
                  </NavLink>
                  <NavLink
                    className="active-router effect-hover"
                    to="/FormSearch"
                    style={{ color: "#fff" }}
                  >
                    Tra c???u v?? l???a ch???n ng??nh
                  </NavLink>
                </div>
                <div className="body-text-input">
                  <p style={{ marginTop: "35px" }}>
                    Ch?? ??: d???u (*) l?? b???t bu???c nh???p
                  </p>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "5%",
                      display: "flex",
                      width: "100%",
                      maxWidth: "500px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <div
                      className="form-group"
                      style={{ width: "35%", margin: "0 10px" }}
                    >
                      <select
                        id="inputState"
                        className="form-control"
                        value={valueSection}
                        onChange={handeChangeValueSection}
                      >
                        <option>Ch???n t??? h???p...</option>
                        <option value="A00">A00</option>
                        <option value="A01">A01</option>
                        <option value="B00">B00</option>
                        <option value="C00">C00</option>
                        <option value="C01">C01</option>
                        <option value="D01">D01</option>
                        <option value="D07">D07</option>
                      </select>
                    </div>
                    <div className="input-group" style={{ width: "65%" }}>
                      <input
                        onChange={handeChangeValueInput}
                        value={valueInput}
                        placeholder="Nh???p ??i???m c???a b???n"
                        type="text"
                        className="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                  {err ? (
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "12px",
                        color: "red",
                      }}
                    >
                      (* Kh??ng ???????c b??? tr???ng ! )
                    </p>
                  ) : null}
                  {err1 ? (
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "12px",
                        color: "red",
                      }}
                    >
                      (* Vui l??ng nh???p ????ng ??i???m c???a m??nh ! )
                    </p>
                  ) : null}

                  <div style={{ marginTop: "20px" }}>
                    <button
                      type="button"
                      className="btn-submit"
                      onClick={handleGetValue}
                    >
                      T??m ki???m
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {hideTable ? (
          <div className="table-data search-table-data">
            <div>
              <p
                style={{
                  fontWeight: "800",
                  fontSize: "20px",
                  textAlign: "center",
                  margin: "22px 0 50px 0",
                  color: "#212529",
                }}
              >
                {" "}
                B???NG K???T QU???
              </p>
              <table className="table">
                <thead>
                  <tr style={{ width: "100%", display: "flex" }}>
                    <th
                      style={{
                        width: "calc((100%)/3)",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      scope="col"
                    >
                      <span>Tr?????ng</span>
                    </th>
                    <th
                      style={{
                        width: "calc((100%)/3)",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      scope="col"
                    >
                      <span>Ng??nh</span>
                    </th>
                    <th
                      style={{
                        width: "calc((100%)/3)",
                        textAlign: "center",
                      }}
                      scope="col"
                    >
                      ??i???m ( 2021)
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            {noData ? (
              <>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "200px",
                    fontSize: "30px",
                    color: "#ccc",
                  }}
                >
                  Kh??ng t??m th???y k???t qu??? n??o!
                </p>
              </>
            ) : null}
            {data &&
              data?.map((data, index) => {
                return (
                  <div key={index}>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "calc((100%)/3)",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontWeight: "600" }}>
                              {data.university_name}
                            </span>
                            <span> ({data.university_code})</span>
                          </td>
                          <td
                            style={{
                              width: "calc((100%)/3)",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontWeight: "600" }}>
                              {data.major_name}
                            </span>
                            <span> ({data.major_code})</span>
                          </td>
                          <td
                            style={{
                              width: "calc((100%)/3)",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontWeight: "600" }}>
                              {data.entry_normalize_score}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })}

            <div className="close-data-form" style={{ zIdex: "99" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeTable}
              >
                ????ng b???ng
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
