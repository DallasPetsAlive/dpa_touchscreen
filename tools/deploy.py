import subprocess
from os import walk

import boto3
import magic

subprocess.run("npm run build", shell=True, cwd="../dpa_touchscreen_app")

print("Deploying to S3...")

s3_client = boto3.client("s3")

# get all files
for (path, _, filenames) in walk("../dpa_touchscreen_app/build"):
    for filename in filenames:
        # skip the image files
        if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".gif"):
            continue

        full_filename = path + "/" + filename
        object_name = full_filename.replace("../dpa_touchscreen_app/build/", "")

        # get the mime type
        mime_type = magic.from_file(full_filename, mime=True)

        if full_filename.endswith(".css"):
            mime_type = "text/css"

        print("Uploading " + full_filename + " to " + object_name + " (" + mime_type + ")...")

        s3_client.upload_file(path + "/" + filename, "dpa-touchscreen", object_name, ExtraArgs={
            "ACL": "public-read",
            "ContentType": mime_type,
        })
