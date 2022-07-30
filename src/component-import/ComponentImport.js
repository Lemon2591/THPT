import "./ComponentImport.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "antd";

export default function ComponentImport() {
  const dispatch = useDispatch();
  const [keywordSclool, setKeyWordSchool] = useState(``);
  const [keywordMajor, setKeyWordMajor] = useState(``);

  const dataGeted = useSelector((state) => {
    const arr1 = state.GetDataPointReducer.data.filter((data) => {
      return keywordSclool
        ? data.university_name
            .toLocaleLowerCase()
            .includes(keywordSclool.toLocaleLowerCase())
        : data;
    });

    if (keywordSclool) {
      const arr2 = arr1.filter((data) => {
        return keywordMajor
          ? data.major_name
              .toLocaleLowerCase()
              .includes(keywordMajor.toLocaleLowerCase())
          : data;
      });
      return arr2;
    } else {
      const arr1 = state.GetDataPointReducer.data.filter((data) => {
        return keywordMajor
          ? data.major_name
              .toLocaleLowerCase()
              .includes(keywordMajor.toLocaleLowerCase())
          : data;
      });
      return arr1;
    }
  });

  console.log(dataGeted);
  const handleChangeSchool = (e) => {
    setKeyWordSchool(e.target.value);
  };
  const handleChangeMajor = (e) => {
    setKeyWordMajor(e.target.value);
  };

  useEffect(() => {
    const handleSubmit = () => {
      dispatch({ type: "ON_GET_DATA" });
    };
    handleSubmit();
  }, []);
  return (
    <>
      <div className="form-import-container">
        <div className="form-import-content">
          <div className="form-import">
            <div className="title-content">
              <div className="title">
                <h2>
                  ĐIỂM CHUẨN CÁC TRƯỜNG ĐẠI HỌC 2021 VÀ GỢI Ý ĐĂNG KÝ NGUYỆN
                  VỌNG
                </h2>
                <p></p>
              </div>
              <div className="body-text">
                <div className="body-text-router">
                  <NavLink className="active-router effect-hover" to="/">
                    Điểm chuẩn các trường đại học
                  </NavLink>
                  <NavLink
                    className="effect-hover"
                    to="/FormSearch"
                    style={{ color: "#fff" }}
                  >
                    Tra cứu và lựa chọn ngành
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table-data">
          <div>
            <table className="table">
              <thead>
                <tr style={{ width: "100%", display: "flex" }}>
                  <th
                    className="title-table"
                    style={{
                      width: "calc((100%)/3)",
                      display: "flex",
                    }}
                    scope="col"
                  >
                    <span>Trường</span>
                    <Input
                      value={keywordSclool}
                      onChange={handleChangeSchool}
                      style={{ marginLeft: "80px", marginRight: "20px" }}
                      placeholder={"Tìm trường ..."}
                    ></Input>
                    {/* <input style={{ marginLeft: "50px" }}></input> */}
                  </th>
                  <th
                    className="title-table"
                    style={{
                      width: "calc((100%)/3)",
                      display: "flex",
                    }}
                    scope="col"
                  >
                    <span>Ngành</span>
                    <Input
                      value={keywordMajor}
                      onChange={handleChangeMajor}
                      style={{ marginLeft: "80px", marginRight: "20px" }}
                      placeholder={"Tìm ngành ..."}
                    ></Input>
                    {/* <input style={{ marginLeft: "50px" }}></input> */}
                  </th>
                  <th
                    className="title-table"
                    style={{ width: "calc((100%)/3)", textAlign: "center" }}
                    scope="col"
                  >
                    Điểm ( 2021)
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          {dataGeted &&
            dataGeted?.map((data, index) => {
              return (
                <div key={index}>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td style={{ width: "calc((100%)/3)" }}>
                          <span style={{ fontWeight: "600" }}>
                            {data.university_name}
                          </span>
                          <span> ({data.university_code})</span>
                        </td>
                        <td style={{ width: "calc((100%)/3)" }}>
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
        </div>
      </div>
    </>
  );
}
