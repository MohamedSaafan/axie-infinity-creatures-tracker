import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import ScholarForm from "../scholar-form";
import { editScholarAsync } from "../../scholars/scholarSlice";

interface Props {
  match: { params: { id: string } };
}

const EditScholar: React.FC<Props> = (props) => {
  const id = +props.match.params.id;
  const history = useHistory();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const [initialValues, setInitialValues] = useState<ScholarType>({
    wallet_id: "",
    name: "",
    team_id: 0,
    id,
  });

  useEffect(() => {
    setInitialValues(state.scholars.values.find((item) => item.id === id)!);
  }, []);
  console.log(initialValues, "from initialValues");

  const handelFormRendering = (initialValues: ScholarType) => {
    return (
      <ScholarForm
        initialValues={initialValues}
        handleSave={handleSaveClick}
        id={props.match.params.id}
        type='edit'
      />
    );
  };
  const handleSaveClick = (values: ScholarType) => {
    dispatch(
      editScholarAsync({
        scholar: { ...values, id },
        callback: () => {
          history.push("/scholars");
          alert("updated Successfully");
        },
      })
    );
  };

  return (
    <div className='card shadow'>
      <div className='card-header'>Edit Scholar</div>
      <div className='card-body'>{handelFormRendering(initialValues)}</div>
    </div>
  );
};
export default EditScholar;
