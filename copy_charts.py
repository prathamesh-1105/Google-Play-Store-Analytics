import shutil
import os

workspace_dir = os.path.dirname(os.path.abspath(__file__))
charts_dir = os.path.join(workspace_dir, "charts")

def copy_charts():
    # Ensure root charts directory exists
    os.makedirs(charts_dir, exist_ok=True)
    print(f"Created/verified charts directory at: {charts_dir}")
    
    copied_count = 0
    for task_num in range(1, 7):
        src_path = os.path.join(workspace_dir, "tasks", f"Task_{task_num}", f"task{task_num}_chart.html")
        dst_path = os.path.join(charts_dir, f"task{task_num}_chart.html")
        
        if os.path.exists(src_path):
            print(f"Copying {src_path} -> {dst_path}...")
            shutil.copy2(src_path, dst_path)
            copied_count += 1
        else:
            print(f"Warning: Source chart not found for Task {task_num} at: {src_path}")
            
    print(f"Successfully copied {copied_count}/6 charts to {charts_dir}!")

if __name__ == "__main__":
    copy_charts()
