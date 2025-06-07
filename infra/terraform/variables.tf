variable "aws_region" {
  default = "ap-south-1"
}

variable "ami_id" {
  description = "Ubuntu 22.04 LTS AMI for ap-south-1 (Mumbai)"
  default     = "ami-0f58b397bc5c1f2e8"
}

variable "key_name" {
  description = "Your AWS EC2 key pair name"
  type        = string
}
