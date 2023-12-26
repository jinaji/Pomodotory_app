import React from "react";

export const PomodoroTimerSetter = ({ setTime }: any) => {
  const timeType: string[] = ["Work", "Short Break", "Long Break"];

  return (
    <div className="flex gap-20">
      {timeType.map((item) => (
        <p className="time-to-select">{item}</p>
      ))}
    </div>
  );

  //   list.map((item) => (
  // 	<Friend key={item.id} data={item}>
  // 	  {type === 'dm' && <DmButton item={item} />}
  // 	  {type === 'adminManage' && (
  // 		<AdminButton
  // 		  data={item}
  // 		  text={role === 'admin' ? '관리자 해제' : '관리자 등록'}
  // 		/>
  // 	  )}
  // 	</Friend>
  //   )
  //   ))
};
