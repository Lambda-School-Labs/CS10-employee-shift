import React from 'react';

const TimeOffRequest = () => {
    return (
        <div>
            <h1>time off requested</h1>
            <form action="">
              Date: <input type="text" name="date" placeholder="date" /> <br />
              Reason: <input type="text" name="reason" placeholder="reason" />
              <br />
              <input type="submit" value="submit" />
            </form>
          </div>
    )
}

export default TimeOffRequest;