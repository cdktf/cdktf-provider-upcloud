# `kubernetesCluster` Submodule <a name="`kubernetesCluster` Submodule" id="@cdktf/provider-upcloud.kubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesCluster <a name="KubernetesCluster" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster upcloud_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import kubernetes_cluster

kubernetesCluster.KubernetesCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  control_plane_ip_filter: typing.List[str],
  name: str,
  network: str,
  zone: str,
  labels: typing.Mapping[str] = None,
  plan: str = None,
  private_node_groups: typing.Union[bool, IResolvable] = None,
  storage_encryption: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.controlPlaneIpFilter">control_plane_ip_filter</a></code> | <code>typing.List[str]</code> | IP addresses or IP ranges in CIDR format which are allowed to access the cluster control plane. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Cluster name. Needs to be unique within the account. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.network">network</a></code> | <code>str</code> | Network ID for the cluster to run in. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs to classify the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.plan">plan</a></code> | <code>str</code> | The pricing plan used for the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.privateNodeGroups">private_node_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable private node groups. Private node groups requires a network that is routed through NAT gateway. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.storageEncryption">storage_encryption</a></code> | <code>str</code> | Set default storage encryption strategy for all nodes in the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.version">version</a></code> | <code>str</code> | Kubernetes version ID, e.g. `1.28`. You can list available version IDs with `upctl kubernetes versions`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `control_plane_ip_filter`<sup>Required</sup> <a name="control_plane_ip_filter" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.controlPlaneIpFilter"></a>

- *Type:* typing.List[str]

IP addresses or IP ranges in CIDR format which are allowed to access the cluster control plane.

To allow access from any source, use `["0.0.0.0/0"]`. To deny access from all sources, use `[]`. Values set here do not restrict access to node groups or exposed Kubernetes services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#control_plane_ip_filter KubernetesCluster#control_plane_ip_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.name"></a>

- *Type:* str

Cluster name. Needs to be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.network"></a>

- *Type:* str

Network ID for the cluster to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#network KubernetesCluster#network}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.zone"></a>

- *Type:* str

Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#zone KubernetesCluster#zone}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Key-value pairs to classify the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.plan"></a>

- *Type:* str

The pricing plan used for the cluster.

Default plan is `development`. You can list available plans with `upctl kubernetes plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#plan KubernetesCluster#plan}

---

##### `private_node_groups`<sup>Optional</sup> <a name="private_node_groups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.privateNodeGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable private node groups. Private node groups requires a network that is routed through NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#private_node_groups KubernetesCluster#private_node_groups}

---

##### `storage_encryption`<sup>Optional</sup> <a name="storage_encryption" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.storageEncryption"></a>

- *Type:* str

Set default storage encryption strategy for all nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#storage_encryption KubernetesCluster#storage_encryption}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.Initializer.parameter.version"></a>

- *Type:* str

Kubernetes version ID, e.g. `1.28`. You can list available version IDs with `upctl kubernetes versions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetPrivateNodeGroups">reset_private_node_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetStorageEncryption">reset_storage_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_private_node_groups` <a name="reset_private_node_groups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetPrivateNodeGroups"></a>

```python
def reset_private_node_groups() -> None
```

##### `reset_storage_encryption` <a name="reset_storage_encryption" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetStorageEncryption"></a>

```python
def reset_storage_encryption() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import kubernetes_cluster

kubernetesCluster.KubernetesCluster.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import kubernetes_cluster

kubernetesCluster.KubernetesCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import kubernetes_cluster

kubernetesCluster.KubernetesCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import kubernetes_cluster

kubernetesCluster.KubernetesCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KubernetesCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkCidr">network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nodeGroups">node_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.controlPlaneIpFilterInput">control_plane_ip_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.privateNodeGroupsInput">private_node_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.storageEncryptionInput">storage_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.controlPlaneIpFilter">control_plane_ip_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.privateNodeGroups">private_node_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.storageEncryption">storage_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_cidr`<sup>Required</sup> <a name="network_cidr" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkCidr"></a>

```python
network_cidr: str
```

- *Type:* str

---

##### `node_groups`<sup>Required</sup> <a name="node_groups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nodeGroups"></a>

```python
node_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `control_plane_ip_filter_input`<sup>Optional</sup> <a name="control_plane_ip_filter_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.controlPlaneIpFilterInput"></a>

```python
control_plane_ip_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `private_node_groups_input`<sup>Optional</sup> <a name="private_node_groups_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.privateNodeGroupsInput"></a>

```python
private_node_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_encryption_input`<sup>Optional</sup> <a name="storage_encryption_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.storageEncryptionInput"></a>

```python
storage_encryption_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `control_plane_ip_filter`<sup>Required</sup> <a name="control_plane_ip_filter" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.controlPlaneIpFilter"></a>

```python
control_plane_ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `private_node_groups`<sup>Required</sup> <a name="private_node_groups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.privateNodeGroups"></a>

```python
private_node_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_encryption`<sup>Required</sup> <a name="storage_encryption" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.storageEncryption"></a>

```python
storage_encryption: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterConfig <a name="KubernetesClusterConfig" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import kubernetes_cluster

kubernetesCluster.KubernetesClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  control_plane_ip_filter: typing.List[str],
  name: str,
  network: str,
  zone: str,
  labels: typing.Mapping[str] = None,
  plan: str = None,
  private_node_groups: typing.Union[bool, IResolvable] = None,
  storage_encryption: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneIpFilter">control_plane_ip_filter</a></code> | <code>typing.List[str]</code> | IP addresses or IP ranges in CIDR format which are allowed to access the cluster control plane. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.name">name</a></code> | <code>str</code> | Cluster name. Needs to be unique within the account. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.network">network</a></code> | <code>str</code> | Network ID for the cluster to run in. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.zone">zone</a></code> | <code>str</code> | Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs to classify the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.plan">plan</a></code> | <code>str</code> | The pricing plan used for the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.privateNodeGroups">private_node_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable private node groups. Private node groups requires a network that is routed through NAT gateway. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.storageEncryption">storage_encryption</a></code> | <code>str</code> | Set default storage encryption strategy for all nodes in the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.version">version</a></code> | <code>str</code> | Kubernetes version ID, e.g. `1.28`. You can list available version IDs with `upctl kubernetes versions`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `control_plane_ip_filter`<sup>Required</sup> <a name="control_plane_ip_filter" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneIpFilter"></a>

```python
control_plane_ip_filter: typing.List[str]
```

- *Type:* typing.List[str]

IP addresses or IP ranges in CIDR format which are allowed to access the cluster control plane.

To allow access from any source, use `["0.0.0.0/0"]`. To deny access from all sources, use `[]`. Values set here do not restrict access to node groups or exposed Kubernetes services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#control_plane_ip_filter KubernetesCluster#control_plane_ip_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Cluster name. Needs to be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Network ID for the cluster to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#network KubernetesCluster#network}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#zone KubernetesCluster#zone}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key-value pairs to classify the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

The pricing plan used for the cluster.

Default plan is `development`. You can list available plans with `upctl kubernetes plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#plan KubernetesCluster#plan}

---

##### `private_node_groups`<sup>Optional</sup> <a name="private_node_groups" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.privateNodeGroups"></a>

```python
private_node_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable private node groups. Private node groups requires a network that is routed through NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#private_node_groups KubernetesCluster#private_node_groups}

---

##### `storage_encryption`<sup>Optional</sup> <a name="storage_encryption" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.storageEncryption"></a>

```python
storage_encryption: str
```

- *Type:* str

Set default storage encryption strategy for all nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#storage_encryption KubernetesCluster#storage_encryption}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.kubernetesCluster.KubernetesClusterConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Kubernetes version ID, e.g. `1.28`. You can list available version IDs with `upctl kubernetes versions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}

---



