// 1a, 3b, 3d
function Exercise({ good = "Great", bad = "Not Great" }) {
    // 2a
      return (
        <div>
          {/* 3c */}
          <h1>{good}</h1>
          <h1>{bad}</h1>
        </div>
      );
    }
    
    // 1b
    export default Exercise;