import os
import json
print(json.dumps({"files": os.listdir(os.curdir)}, indent=2))